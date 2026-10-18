import { useState } from "react";
import { Expand, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MenuPdfViewer, MENU_PDF_URL } from "@/components/MenuPdfViewer";
import preview from "@/assets/official-menu-preview.asset.json";

export function MenuShowcase() {
  const reduce = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <section className="menu-showcase" aria-label="Official Burger Treats food menu">
      <div className="menu-art" aria-hidden="true">
        <span className="menu-art-ring" />
        <span className="menu-art-frame" />
        <span className="menu-art-stripes" />
        <span className="menu-art-block" />
        <span className="menu-art-cross" />
      </div>
      <Dialog>
        <motion.div className="menu-preview-wrap" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          {imageFailed ? <Button asChild variant="outline"><a href={MENU_PDF_URL}>Open official food menu</a></Button> : (
            <DialogTrigger asChild>
              <Button variant="ghost" className="menu-preview" aria-label="Open official food menu" title="Open menu">
                <img src={preview.url} width={1273} height={1800} alt="The original Burger Treats food menu with burgers, sides, drinks and prices" onError={() => setImageFailed(true)} fetchPriority="high" />
                <span className="menu-preview-open" aria-hidden="true"><Expand /></span>
              </Button>
            </DialogTrigger>
          )}
        </motion.div>
        <DialogPortal>
          <DialogPrimitive.Overlay className="menu-viewer-overlay" />
          <DialogPrimitive.Content className="menu-viewer-modal" aria-describedby={undefined}>
            <DialogTitle className="sr-only">Burger Treats official food menu</DialogTitle>
            <DialogClose asChild><Button variant="secondary" size="icon" className="menu-viewer-close" aria-label="Close menu" title="Close menu"><X /></Button></DialogClose>
            <MenuPdfViewer />
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </section>
  );
}