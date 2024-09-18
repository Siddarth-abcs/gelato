"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("IN/INR");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Products" },
    { text: "Start selling" },
    { text: "Tools and apps" },
    { text: "Pricing" },
    { text: "Resources" },
    { text: "Pro sellers" },
    { text: "GelatoConnect" },
  ];

  // menu nav
  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation">
      <Divider />
      <div className="flex flex-col justify-center">
        {/* part1 */}

        <div className="w-full py-4 border-b border-gray-200 flex justify-center ">
          <div className="w-11/12 flex items-center justify-around">
            <button
              onClick={toggleDrawer(false)}
              className="hover:bg-gray-300 rounded-[50px] p-1"
            >
              <CloseIcon
                sx={{
                  fontSize: 30,
                }}
              />
            </button>
            {/* Currency Selector */}
            <div className="  relative hover:bg-gray-300 rounded-full inline-flex items-center px-3 py-1 border-gray-300">
              {/* Language Icon */}
              <LanguageIcon className="text-black mr-2" />

              {/* Selected Option Text */}
              <span className="text-black mr-1 font-medium">
                {selectedOption}
              </span>

              {/* Dropdown Icon */}
              <ArrowDropDownIcon className="text-black" />

              {/* Select Element (Hidden) */}
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="IN/INR">IN/INR</option>
                <option value="US/USD">US/USD</option>
                <option value="UK/GBP">UK/GBP</option>
                <option value="FR/EUR">FR/EUR</option>
                <option value="JP/JPY">JP/JPY</option>
              </select>
            </div>
            <hr className="h-8 border-r-2 border-gray-300"></hr>
            {/* Cart */}
            <Button
              variant="text"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                color: "black",
                px: 1.5,

                fontWeight: 550, // Setting font weight here

                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <ShoppingCartIcon sx={{ mr: 1 }} />
              Cart
            </Button>
          </div>
        </div>
        {/* part2 */}
        <div className="w-full py-4 border-b border-gray-200 flex justify-center">
          <div className="w-11/12 flex items-center justify-around">
            {/* Sign In */}
            <Button
              variant="text"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                color: "black",
                px: 1.5,

                fontWeight: 550, // Setting font weight here

                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <PersonIcon sx={{ mr: 1 }} />
              Sign in
            </Button>
            {/* line */}
            <hr className="h-8 border-r-2 border-gray-300"></hr>

            {/* Sign Up */}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                backgroundColor: "black",
                px: 1.5,

                fontWeight: 550, // Setting font weight here

                color: "white",
                "&:hover": {
                  color: "darkgray",
                },
              }}
            >
              Sign up for free
            </Button>
          </div>
        </div>
        {/* part3 */}
        <div className="pl-2 w-full flex items-center justify-around">
          <div className="text-black w-full">
            <List>
              {menuItems.map((item, index) => (
                <a href="#">
                  <ListItem button key={index} className="hover:bg-gray-200">
                    <ListItemText primary={item.text} />
                    <ListItemIcon>
                      <ChevronRight sx={{ color: "black" }} />
                    </ListItemIcon>
                  </ListItem>
                </a>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    // border-b-2 border-gray-200
    <div className="bg-white sticky top-0 z-50">
      <nav className="h-16 border-b border-gray-200 bg-white flex justify-center">
        {/*top navbar Container */}
        <div className="w-11/12 mx-1 sm:w-5/6 flex items-center justify-between">
          {/* Logo & menu */}
          <div className="flex items-center">
            {/* menu */}
            <div className="xl:hidden">
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: "black", fontSize: 28 }} />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
            {/* logo */}
            <img src="/gelato_logo.svg" alt="Gelato" className="h-8" />
          </div>

          {/* Desktop nav buttons */}
          <div className="flex items-center space-x-2">
            {/* Contact Us */}
            <Button
              variant="text"
              sx={{
                display: { xs: "none", lg: "block" }, // Hides on small screens, shows on large screens
                borderRadius: "50px",
                textTransform: "none",
                color: "black",
                px: 1.5,
                fontWeight: 550,
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <HeadsetMicIcon sx={{ mr: 1 }} />
              Contact us
            </Button>

            {/* Currency Selector */}
            <div className=" hidden  relative hover:bg-gray-300 rounded-full md:inline-flex items-center px-3 py-1 border-gray-300">
              {/* Language Icon */}
              <LanguageIcon className="text-black mr-2" />

              {/* Selected Option Text */}
              <span className="text-black mr-1 font-medium">
                {selectedOption}
              </span>

              {/* Dropdown Icon */}
              <ArrowDropDownIcon className="text-black" />

              {/* Select Element (Hidden) */}
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="IN/INR">IN/INR</option>
                <option value="US/USD">US/USD</option>
                <option value="UK/GBP">UK/GBP</option>
                <option value="FR/EUR">FR/EUR</option>
                <option value="JP/JPY">JP/JPY</option>
              </select>
            </div>

            {/* Cart */}
            <Button
              variant="text"
              sx={{
                display: { xs: "none", md: "block" }, // Hides on small screens, shows on large screens

                borderRadius: "50px",
                textTransform: "none",
                color: "black",
                px: 1.5,

                fontWeight: 550, // Setting font weight here

                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <ShoppingCartIcon sx={{ mr: 1 }} />
              Cart
            </Button>

            {/* Sign In */}
            <Button
              variant="text"
              sx={{
                display: { xs: "none", lg: "block" }, // Hides on small screens, shows on large screens

                borderRadius: "50px",
                textTransform: "none",
                color: "black",
                px: 1.5,

                fontWeight: 550, // Setting font weight here

                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <PersonIcon sx={{ mr: 1 }} />
              Sign in
            </Button>

            {/* Sign Up */}
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                backgroundColor: "black",
                px: 1.5,
                fontWeight: 550, // Setting font weight here

                color: "white",
                "&:hover": {
                  color: "darkgray",
                },
              }}
            >
              Sign up for free
            </Button>
          </div>
        </div>
      </nav>
      {/* dasktop bottom navbar */}
      <nav class="hidden xl:flex justify-center py-1 items-center border-b border-gray-200">
        {/* <!-- Left side: Navigation links --> */}
        <div class="w-5/6 flex text-[0.9rem]">
          {/* Products dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Products{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown --> */}
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Bestsellers
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                New Arrivals
              </a>
            </div>
          </div>
          {/* Start selling dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Start Selling{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                How it works
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Pricing
              </a>
            </div>
          </div>
          {/*  Tools and apps dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Tools and Apps{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Integration
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                API
              </a>
            </div>
          </div>
          {/*  Pricing dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Pricing{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Partnerships
              </a>
            </div>
          </div>
          {/*  Resources dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Resources{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Integration
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                API
              </a>
            </div>
          </div>
          {/*  Pro sellers dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              Pro sellers{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Integration
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                API
              </a>
            </div>
          </div>
          {/*  GelatoConnect dropdown */}
          <div class="relative group">
            <button class="text-black font-semibold p-3 inline-flex items-center hover:bg-blue-200">
              GelatoConnect{" "}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg mt-1 w-48">
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Partnerships
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
