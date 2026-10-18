import { useEffect, useRef, useState } from "react";
import { ExternalLink, LoaderCircle, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

export const MENU_PDF_URL = "/Burger-Treats-Food-Menu.pdf";

function PdfPage({ document, number, width }: { document: PDFDocumentProxy; number: number; width: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let renderTask: ReturnType<PDFPageProxy["render"]> | undefined;
    setReady(false);
    setFailed(false);
    async function render() {
      try {
        const page = await document.getPage(number);
        const canvas = canvasRef.current;
        if (cancelled || !canvas) return;
        const original = page.getViewport({ scale: 1 });
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale: width / original.width * ratio });
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        renderTask = page.render({ canvas, viewport });
        await renderTask.promise;
        const content = await page.getTextContent();
        if (cancelled) return;
        setText(content.items.map((item) => "str" in item ? item.str : "").join(" "));
        setReady(true);
      } catch (error) {
        if (!cancelled && !(error instanceof Error && error.name === "RenderingCancelledException")) setFailed(true);
      }
    }
    void render();
    return () => { cancelled = true; renderTask?.cancel(); };
  }, [document, number, width]);

  return (
    <div className="menu-pdf-page" aria-busy={!ready && !failed}>
      <canvas ref={canvasRef} role="img" aria-label={`Official Burger Treats menu, page ${number}`} />
      <p className="sr-only">{text}</p>
      {!ready && !failed && <div className="menu-page-status" role="status"><LoaderCircle className="animate-spin" aria-hidden /> <span className="sr-only">Rendering page {number}</span></div>}
      {failed && <div className="menu-page-status" role="alert">This page couldn’t load. <a href={MENU_PDF_URL} target="_blank" rel="noreferrer" className="underline">Open PDF</a></div>}
    </div>
  );
}

export function MenuPdfViewer() {
  const [document, setDocument] = useState<PDFDocumentProxy>();
  const [failed, setFailed] = useState(false);
  const [width, setWidth] = useState(600);
  const [zoom, setZoom] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setWidth(Math.max(180, entry.contentRect.width - 32));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let task: { destroy: () => Promise<void> } | undefined;
    async function load() {
      try {
        const pdfjs = await import("pdfjs-dist");
        const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
        if (cancelled) return;
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
        const loading = pdfjs.getDocument(MENU_PDF_URL);
        task = loading;
        const pdf = await loading.promise;
        if (!cancelled) setDocument(pdf);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }
    void load();
    return () => { cancelled = true; void task?.destroy(); };
  }, []);

  return (
    <>
      <div className="menu-viewer-tools">
        <Button variant="ghost" size="icon" aria-label="Zoom out" title="Zoom out" disabled={zoom <= 1} onClick={() => setZoom((value) => Math.max(1, value - 0.25))}><Minus /></Button>
        <output className="w-14 text-center text-xs tabular-nums" aria-live="polite">{Math.round(zoom * 100)}%</output>
        <Button variant="ghost" size="icon" aria-label="Zoom in" title="Zoom in" disabled={zoom >= 2.5} onClick={() => setZoom((value) => Math.min(2.5, value + 0.25))}><Plus /></Button>
        <Button asChild variant="ghost" size="icon"><a href={MENU_PDF_URL} target="_blank" rel="noreferrer" aria-label="Open original PDF" title="Open original PDF"><ExternalLink /></a></Button>
      </div>
      <div ref={scrollRef} className="menu-viewer-scroll" tabIndex={0} aria-label="Menu document">
        {!document && !failed && <div className="menu-viewer-status" role="status"><LoaderCircle className="animate-spin" aria-hidden /> Loading menu…</div>}
        {failed && <div className="menu-viewer-status" role="alert">The menu couldn’t load.<Button asChild variant="outline"><a href={MENU_PDF_URL} target="_blank" rel="noreferrer">Open original PDF <ExternalLink /></a></Button></div>}
        {document && <div className="menu-pdf-pages" style={{ width: `${width * zoom}px` }}>{Array.from({ length: document.numPages }, (_, index) => <PdfPage key={index} document={document} number={index + 1} width={width * zoom} />)}</div>}
      </div>
    </>
  );
}