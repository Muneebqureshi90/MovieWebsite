import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full p-4 bg-neutral-800">
            <MenuIcon className="text-white" style={{ fontSize: '28px' }} />
            <div className="text-center text-4xl font-bold">
                <span className="text-yellow-500 ">M</span><span className="text-white">ovies</span>
            </div>
            <SearchIcon className="text-white" style={{ fontSize: '28px' }} />
        </div>
    );
};

export default Navbar;
