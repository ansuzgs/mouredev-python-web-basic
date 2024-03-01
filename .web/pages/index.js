/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { FloatButton } from "antd"
import { LinkIcon } from "@chakra-ui/icons"
import { isTrue } from "/utils/state"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Link as={NextLink} href={`/`} sx={{"color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Pablo`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`GS`}
</Text>
</Box>
</Link>
  <FloatButton badge={{"dot": true, "color": "#14A1F0"}} href={`https://`} icon={<ChakraImage src={`/icons/donate.svg`}/>} target={`_blank`}/>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`left`} spacing={`5`}>
  <HStack spacing={`5`}>
  <Avatar size={`lg`} sx={{"fallback": "PGS"}}/>
  <VStack alignItems={`left`}>
  <Heading size={`md`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Pablo GS`}
</Heading>
  <Text sx={{"marginTop": "0!important", "color": "#14A1F0"}}>
  {`@ansuz_gs`}
</Text>
  <Text sx={{"marginTop": "0!important", "color": "#C3C7CB"}}>
  {`Software Developer`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com`} isExternal={true} sx={{"color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://youtube.com`} isExternal={true} sx={{"color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://google.com`} isExternal={true} sx={{"color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` Años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` Años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` Años de experiencia`}
</Box>
</Flex>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <Text sx={{"color": "#C3C7CB"}}>
  {`BLABB BBBBBB BBBLASKD RFLBKLSD KGFBLADKGBLSKDL GKBADLkgblkasdkgbklj daslgkjba dlkg jbkladj gklbdajb
                    sdkgjbklsdjgbklsdjgk lbjsdklgjbk lsdjgklbd sjgklbjsdgklbjsdk lgjbsdkljgbk ljsdgk lbsd jklgbjs dklgjbsk
                    sdk gjbklsdj gbklsdj gklbj sdklgjbsd klgjbklsdj gbjkldjk lbjdklgj bdklgjbk lsdj gbk lsdjgk lbsdj gkb jsdk`}
</Text>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</VStack>
  <VStack spacing={`5`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`/cursos`} isExternal={false} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/code.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Cursos gratis`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Consulta mis tutoriales para aprender programacion`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.twitch.tv`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/twitch.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/youtube.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/instagram.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Fotos nuevas a diario`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Curriculum actualizado`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.twitch.tv`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/twitch.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/youtube.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/instagram.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`Instagram`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Fotos nuevas a diario`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com`} isExternal={true} sx={{"width": "100%", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack alignItems={`center`} sx={{"width": "100%"}}>
  <ChakraImage src={`/icons/linkedin.svg`} sx={{"width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`1`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4", "size": "3"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontWeight": "300", "color": "#C3C7CB", "size": "1"}}>
  {`Curriculum actualizado`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack spacing={`4`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em"}}>
  <ChakraImage src={`favicon.ico`}/>
  <Text sx={{"fontSize": "0.8em", "color": "#A3ABB2"}}>
  {`PGS © 2024 Reflex Inc.`}
</Text>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`MoureDev | Te enseño programacion y desarrollo de software`}
</title>
  <meta content={`Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`description`}/>
  <meta content={`https://moure.dev/preview`} property={`og:image`}/>
  <meta content={`MoureDev | Te enseño programacion y desarrollo de software`} name={`og:title`}/>
  <meta content={`Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`og:description`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`https://moure.dev/preview`} name={`og:image`}/>
  <meta content={`summary_large_image`} name={`twitter:card`}/>
  <meta content={`@mouredev`} name={`twitter:site`}/>
</NextHead>
</Fragment>
  )
}
