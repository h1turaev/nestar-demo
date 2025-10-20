import React, { useState } from "react";
import { Stack, Box, Link } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./TopAgentCard";

const TopAgents = ({initialInput, ...props}: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);
  
  return (
    <Stack className={"top-agents"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our top agents are always ready to serve you!</p>
          </Box>
          <Box className={"right"}>
            <div className="more-box">
              <Link href={"/agent"}>
                <span>See All Agents</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"wrapper"}>
          <Box className={"switch-btn swiper-agents-prev"}>
            <ArrowBackIosNewIcon />
          </Box>
          <Box className={"card-wrapper"}>
            <Swiper
              className={"top-agents-swiper"}
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".switch-btn .swiper-agents-next",
                prevEl: ".switch-btn .swiper-agents-prev",
              }}
              autoplay={{
                delay: 3000,       // ⏱️ Slide every 3 seconds
                disableOnInteraction: false, // ⬅️ Keep autoplay after user interaction
              }}
            >
              {topAgents.map((agent, index) => {
                return (
                  <SwiperSlide key={index} className={"top-agents-slide"}>
                    <TopAgentCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box className={"switch-btn swiper-agents-next"}>
            <ArrowBackIosNewIcon />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

TopAgents.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7]
};

export default TopAgents;