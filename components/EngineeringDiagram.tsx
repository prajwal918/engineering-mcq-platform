"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, RotateCcw, ImageOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EngineeringDiagramProps {
  src: string;
  alt: string;
}

type LoadStatus = "loading" | "loaded" | "error";

/**
 * Pan/pinch/zoom viewer for an externally-hosted reference image
 * (QuizQuestion.diagramUrl). Supports 0.3x-8x zoom, drag-to-pan,
 * pinch-to-zoom on touch devices, double-click/double-tap to toggle
 * zoom, and overlay Zoom In / Zoom Out / Reset controls.
 */
export default function EngineeringDiagram({ src, alt }: EngineeringDiagramProps) {
  const [status, setStatus] = useState<LoadStatus>("loading");

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-secondary/30">
      {status === "error" ? (
        <div className="flex h-64 flex-col items-center justify-center gap-2 text-muted-foreground sm:h-80">
          <ImageOff className="h-8 w-8" aria-hidden="true" />
          <p className="text-sm">Couldn&apos;t load this diagram.</p>
        </div>
      ) : (
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={8}
          centerOnInit
          doubleClick={{ mode: "toggle" }}
          wheel={{ step: 0.15 }}
          pinch={{ step: 5 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute right-2 top-2 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3">
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 shadow-md"
                  onClick={() => zoomIn()}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 shadow-md"
                  onClick={() => zoomOut()}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  className="h-9 w-9 shadow-md"
                  onClick={() => resetTransform()}
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              {status === "loading" && (
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" aria-hidden="true" />
                </div>
              )}

              <TransformComponent
                wrapperStyle={{ width: "100%", height: "16rem" }}
                contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {/* Plain <img>, not next/image: react-zoom-pan-pinch needs direct
                    control of the element's transform, and diagramUrl can point
                    at an arbitrary external host. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-h-full max-w-full select-none object-contain"
                  draggable={false}
                  onLoad={() => setStatus("loaded")}
                  onError={() => setStatus("error")}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      )}
    </div>
  );
}
