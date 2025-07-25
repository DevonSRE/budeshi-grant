'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const navlinks = [
    { name: 'Home', path: 'https://budeshi.ng' },
    { name: 'Listing', path: 'https://budeshi.ng/projects' },
    { name: 'Contractors', path: 'https://budeshi.ng/contractors' },
    { name: 'Visualization', path: 'https://budeshi.ng/visualization' },
    { name: 'State of Procurement', path: 'https://budeshi.ng/state-of-procurement' },
  ];

  const handleLogin = () => {
    setMobileMenuOpen(false);
    router.push('https://budeshi.ng/auth/login');
  };

  return (
    <>
      {/* <nav className="px-6 md:px-12 lg:px-20 fixed top-0 left-0 z-30 pt-[1rem] w-full bg-white"> */}
      <nav className="px-6 md:px-12 lg:px-20 fixed top-0 left-0 z-30 pt-[1rem] w-full ">
        <div className="flex gap-4 bg-white justify-between items-center w-full max-w-[1440px] shadow-[0_2px_18px_-3px_rgba(0,0,0,0.10)] rounded-full px-6 py-2 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logo.svg"
              alt="Budeshi Logo"
              className="w-12 md:w-16"
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex gap-4 items-center">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${activeTab === link.path
                    ? 'text-[#223A90] font-medium text-sm border-b-2 pb-1 border-[#223A90]'
                    : 'text-gray-700'
                    } px-2 transition-colors duration-200 text-sm`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Buttons or Mobile Menu Icon */}
          <div className="flex items-center gap-3">
            {!isMobile ? (
              <>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white"
                >
                  Grant Application
                </Button>
                <Button
                  className="rounded-full w-32 bg-[#223A90] text-white hover:bg-[#1a2f6c]"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </>
            ) : (
              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: { width: '75vw', padding: '1rem' },
        }}
      >
        <List>
          {navlinks.map((link) => (
            <ListItem disablePadding key={link.name}>
              <ListItemButton
                component={Link}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                selected={activeTab === link.path}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    fontWeight: activeTab === link.path ? 'bold' : 'normal',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogin}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
