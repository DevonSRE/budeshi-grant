'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  useTheme,
  useMediaQuery,

} from '@mui/material';
import { Button } from './ui/button';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    // router.push(`/${user?.role.split("_").join("-")}/profile`);
  };

  // const handleSettings = () => {
  //   router.push(`/${user?.role.split("_").join("-")}/profile?tab=1`);
  // };

  const navlinks = [
    { name: 'Home', path: '/' },
    { name: 'Listing', path: '/projects' },
    { name: 'Contractors', path: '/contractors' },
    { name: 'Visualization', path: '/visualization' },
    { name: 'State of Procurement', path: '/state-of-procurement' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleLogin = () => {
    setMobileMenuOpen(false);
    router.push('/auth/login');
  };

  return (
    <>
      <nav className="px-6 md:px-12 lg:px-20 fixed top-0 left-0 z-30 pt-[1rem] w-full ">
        <div className="flex gap-10 justify-between items-center w-full max-w-[1440px] mt-[0.5rem] bg-white shadow-[0_2px_18px_-3px_rgba(0,0,0,0.10)] rounded-l-full rounded-r-full px-6 py-2 mx-auto">
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/assets/logo.svg"
                alt="Budeshi Logo"
                className="w-12 md:w-16"
              />
            </Link>
          </div>

          {!isMobile && (
            <div className="flex lg:gap-4 items-center">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${activeTab === link.path
                    ? 'text-[#223A90] font-medium border-b-2 pb-1 border-[#223A90]'
                    : ''
                    } px-2`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            {/* Grant Application - Outlined Style */}
            <Button
              variant="outline"
              className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white"
            >
              Grant Application
            </Button>

            {/* Login - Solid Blue */}
            <Button
              className="rounded-full w-32 bg-[#223A90] text-white hover:bg-[#1a2f6c]"
            >
              Login
            </Button>
          </div>
          {/* <div>
            {isMobile ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div className="flex items-center justify-between w-full">
                {user ? (
               <IconButton onClick={handleMenuClick}>
                    <Avatar
                      alt={
                        user?.name ?? user?.email.split('@')[0].toUpperCase()
                      }
                      src={user?.avatar}
                    />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleSettings}>Settings</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                ) : (
                  <Button title="Login" onClick={handleLogin} />
                )}
              </div>
            )}
          </div> */}
        </div>
      </nav>

      {/* <Drawer
        anchor="right"
        PaperProps={{
          sx: { width: '50%', px: '1rem' },
        }}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <List className="w-3/5">
          {navlinks.map((text, index) => (
            <ListItem
              key={`navlink-${index}`}
              component={Link}
              href={text.path.toLowerCase()}
              onClick={() => setMobileMenuOpen(false)}
            >
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        {user ? (
          <Button
            title="Logout"
            otherStyles="w-fit bg-red-500 text-white"
            icon={<LogOut />}
            onClick={logout}
          />
        ) : (
          <Button variant={"outline"} title="Login" onClick={handleLogin} />
        )}
      </Drawer> */}
    </>
  );
};

export default Navbar;
