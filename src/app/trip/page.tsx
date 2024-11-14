import SwiperImage from "@/components/swiper/SwiperImage";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function TripPage() {
  // git push https://github.com/mohameddahy111/ashia_travel.git branch-to-move:main
  const t = useTranslations("trip");
  return (

    <Box>
      <Box my={10}>
        <SwiperImage />
      </Box>
      <Box
        width={"90%"}
        maxWidth={"1000px"}
        mx={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={3}
        py={5}
        px={2}
      >
        <Typography variant="h4" width={"100%"} textAlign={"center"}>
          {t("title")}
        </Typography>
        <Typography variant="body1" width={"100%"} textAlign={"center"}>
          8, Dec - 18, Dec 2024
        </Typography>
        <Box py={5}>
          <Typography variant="h6" fontWeight={600}>
            First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
          <Typography variant="h6" fontWeight={600}>
            First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
          <Typography variant="h6" fontWeight={600}>
            First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
        <Typography variant="h6" fontWeight={600}>
        First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
        <Typography variant="h6" fontWeight={600}>
        First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
          <Typography variant="h6" fontWeight={600}>
            First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
        <Box py={5}>
          <Typography variant="h6" fontWeight={600}>
            First Day - 8, Dec 2024
          </Typography>
          <Typography variant="body1" maxWidth={"80%"} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            praesentium impedit doloremque accusantium accusamus voluptas rem
            beatae amet dicta, illo dolor pariatur ab, officiis commodi
            exercitationem enim. Aspernatur, reiciendis nostrum! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus necessitatibus
            nobis mollitia veniam consequuntur debitis. Quaerat consequatur
            alias repudiandae, facere doloribus iure quibusdam officiis, illum
            ipsam quia harum, vel perferendis.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
