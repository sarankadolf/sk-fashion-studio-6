"use client"
import Profile from "@/components/profile/profile";
import { Box } from "@material-ui/core";
export default function Feed() {
    return (
    <Box display={"flex"} justifyContent={"center"}>
      <Profile/>
    </Box>
    )
}