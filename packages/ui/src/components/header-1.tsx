'use client';
import React from 'react';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import { MenuToggleIcon } from '@workspace/ui/components/menu-toggle-icon';
import { useScroll } from '@workspace/ui/components/use-scroll';
import { LanguageToggle } from '@workspace/ui/components/language-toggle';
import { useT } from '../i18n/context';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(20);
	const t = useT();

	const links = t.header.links;

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'fixed top-0 inset-x-0 z-50 transition-all duration-300',
				scrolled
					? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
					: 'bg-transparent',
			)}
		>
			<div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
				{/* Logo */}
				<a href="/" className="group flex items-center gap-1 transition-opacity group-hover:opacity-80">
					<img
						src="/fa-logo.png"
						alt="FA"
						className="h-10 w-auto"
					/>
					<span className="text-xl font-bold tracking-tight text-foreground">
						Automations
					</span>
				</a>

				{/* Desktop nav links — centered */}
				<nav className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Desktop CTA + Language Toggle */}
				<div className="hidden items-center gap-3 md:flex">
					<a
						href="/#pricing"
						className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-b from-violet-500/20 to-violet-600/10 px-7 text-sm font-semibold text-white shadow-[0_0_16px_rgba(139,92,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]"
					>
						{t.header.getStarted}
					</a>
					<LanguageToggle />
				</div>

				{/* Mobile hamburger */}
				<Button
					size="icon"
					variant="ghost"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={t.header.toggleMenu}
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</div>

			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-1">
					{links.map((link) => (
						<a
							key={link.href}
							className={buttonVariants({
								variant: 'ghost',
								size: 'lg',
								className: 'justify-start text-base font-medium',
							})}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex justify-center">
						<LanguageToggle />
					</div>
					<a
						href="/#pricing"
						className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-gradient-to-b from-violet-500/20 to-violet-600/10 text-base font-semibold text-white shadow-[0_0_16px_rgba(139,92,246,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
					>
						{t.header.getStarted}
					</a>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 backdrop-blur-xl',
				'fixed top-[4.5rem] right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-border/40 md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-6',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}
