import {
  Button,
  Card,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar */}
      <AppBar position="static" className="bg-blue-500">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Navbar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="flex justify-center items-center h-full">
        <Card className="p-6 shadow-md">
          <h1 className="text-3xl font-bold mb-4">
            Hello with MUI and Tailwind
          </h1>
          <Typography variant="body1" className="mb-4">
            This is an example of how to combine Material UI components with
            Tailwind CSS utilities.
          </Typography>
          <Button variant="contained" color="primary" className="mt-4">
            Click Me
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Navbar;
