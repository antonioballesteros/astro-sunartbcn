import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { MenuIcon } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6 px-4">
            <a
              href="/"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              <img
                src="/images/logo.png"
                alt="SunArtBcn"
                className="h-6 w-auto"
              />
              <span className="text-2xl font-medium text-green-800">
                SunArtBcn
              </span>
            </a>
            <a
              href="/"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              Inicio
            </a>
            <a
              href="/productos"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              Productos
            </a>
            <a
              href="/quien-soy"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              Quien Soy
            </a>
            <a
              href="/tienda"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              Tienda
            </a>
            <a
              href="/contacto"
              className={buttonVariants({
                variant: "link",
                className: "w-fit",
              })}
            >
              Contacto
            </a>
          </div>
        </SheetContent>
      </Sheet>

      <a
        href="/"
        className={buttonVariants({
          variant: "link",
          className: "items-center gap-2 no-underline! mr-6 ",
        })}
      >
        <img
          src="/images/logo.png"
          alt="SunArtBcn Logo"
          className="h-10 w-auto"
        />
        <span className="text-3xl font-medium text-green-800">SunArtBcn</span>
      </a>

      <nav className="ml-auto hidden lg:flex gap-6">
        <a href="/" className={buttonVariants({ variant: "link" })}>
          Inicio
        </a>
        <a href="/productos" className={buttonVariants({ variant: "link" })}>
          Productos
        </a>
        <a href="/quien-soy" className={buttonVariants({ variant: "link" })}>
          Quien Soy
        </a>
        <a href="/tienda" className={buttonVariants({ variant: "link" })}>
          Tienda
        </a>
        <a href="/contacto" className={buttonVariants({ variant: "link" })}>
          Contacto
        </a>
      </nav>
      <ModeToggle className="hidden! lg:inline-flex!" />
    </header>
  );
}
