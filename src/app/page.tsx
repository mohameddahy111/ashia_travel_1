"use client";
import { useTranslations } from "next-intl";

import LanguageMenu from "@/components/client/last-language";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Image from "next/image";
// import Link from "next/link";
import styles from '@/app/page.module.css'

export default function Home() {
  const t = useTranslations();
  
  return (
    <Box>
      <Box
        p={2}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <LanguageMenu />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2
        }}
      >
        <Image src={"https://vcdn.merlinx.eu/image//getbyid/490654"} priority width={400} height={400} alt="ashia" style={{
          maxWidth: "100%",
          maxHeight: "100%"
        }} />
      </Box>
      <Box>
        <Typography component={'h1'}  variant="h4" fontWeight={600} sx={{ textAlign: "center" }}>
          {t("welcome")}
        </Typography>
      </Box>
      <Box py={5} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
        <Typography component={'p'} variant="body1" sx={{ textAlign: "center" }}>
          {t("phone_label")}
        </Typography>
        <TextField size="small" type='tel'  placeholder=" +48 534 000 231"/>
      <Box>
        <Button LinkComponent={'a'} variant='contained' href="/trip" sx={{borderRadius:"20px" , width:"200px"}} >
          {t("getStat")}
        </Button>
        {/* <Link href={'/trip'} className={styles.buttonLink}>
        {t("getStat")}

        </Link> */}
      </Box>
      </Box>
    </Box>
  );
}
