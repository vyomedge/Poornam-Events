import { Chip, Stack, TextField } from '@mui/material'
import React from 'react'

function BlogFinds() {
    return (
        <div className='blogFinds'>
            <div className='blogFinds1'>
                <p style={{
                    fontFamily: "Elsie Swash Caps",
                    fontStyle: " normal",
                    fontSize: '40px',
                    marginBottom: "0px",

                }}><strong>Find What You Need</strong></p>
                <p style={{fontSize:"16px"}}>Search for valuable insights to aid your planning journey.</p>

            </div>
            <div className='blogChips'>
                <label><strong>Search</strong></label>
                <br />
                <TextField style={{ width: "75%", borderRadius: "5px", outerHeight: "20px" }} id="outlined-basic" label="How to plan Haldi?" variant="outlined" /><br />
                <br />
                <label><strong>Filter by Category</strong></label>
                <br />
                <Stack direction="row" spacing={1}>
                    <Chip label="Tips" sx={{ borderRadius: "2px" }} />
                    <Chip label="Trends" sx={{ borderRadius: "2px" }} />
                    <Chip label="Venues" sx={{ borderRadius: "2px" }} />
                    <Chip label="Real Weddings" sx={{ borderRadius: "2px" }} />
                    <Chip label="Budget" sx={{ borderRadius: "2px" }} />
                </Stack>
              <br />
                <label><strong>Filter by Location</strong></label>
                <Stack direction="row" spacing={1}>
                    <Chip label="Indore" sx={{ borderRadius: "2px" }} />
                    <Chip label="Bhopal" sx={{ borderRadius: "2px" }} />
                    <Chip label="Jabalpur" sx={{ borderRadius: "2px" }} />
                    <Chip label="Goa" sx={{ borderRadius: "2px" }} />
                    <Chip label="Udaipur" sx={{ borderRadius: "2px" }} />
                </Stack> <br />
                < br />
                <button style={{ backgroundColor: "DAA412#", color: "white", border: "none", borderRadius: "40px", padding: "5px 45px" }}> Search </button>
            </div>
        </div>
    )
}

export default BlogFinds