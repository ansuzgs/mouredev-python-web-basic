/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { ArrowRightIcon as LucideArrowRightIcon, LinkIcon as LucideLinkIcon } from "lucide-react"
import NextHead from "next/head"



export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "#171F26", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999", "top": "0", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesBox css={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <RadixThemesText as={`span`} css={{"color": "#14A1F0"}}>
  {`Pablo`}
</RadixThemesText>
  <RadixThemesText as={`span`} css={{"color": "#087ec4"}}>
  {`GS`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "600px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "2em", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "flexDirection": "column"}} gap={`5`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`5`}>
  <RadixThemesAvatar fallback={`PGS`} size={`7`}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}} size={`6`}>
  {`Pablo GS`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"marginTop": "0!important", "color": "#14A1F0"}}>
  {`@ansuzgs`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginTop": "0!important", "color": "#C3C7CB"}}>
  {`Software Developer`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true}} href={`https://twitter.com`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true}} href={`https://youtube.com`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true}} href={`https://google.com`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</RadixThemesText>
  {` Años de experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</RadixThemesText>
  {` Años de experiencia`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</RadixThemesText>
  {` Años de experiencia`}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}}>
  {`BLABB BBBBBB BBBLASKD RFLBKLSD KGFBLADKGBLSKDL GKBADLkgblkasdkgbklj daslgkjba dlkg jbkladj gklbdajb
                sdkgjbklsdjgbklsdjgk lbjsdklgjbk lsdjgklbd sjgklbjsdgklbjsdk lgjbsdkljgbk ljsdgk lbsd jklgbjs dklgjbsk
                sdk gjbklsdj gbklsdj gklbj sdklgjbsd klgjbklsdj gbjkldjk lbjdklgj bdklgjbk lsdj gbk lsdjgk lbsdj gkb jsdk`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`5`}>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.twitch.tv`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Directos de lunes a viernes`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.youtube.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Youtube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Tutoriales semanales`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.instagram.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Fotos nuevas cada semana`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.linkedin.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Curriculum actualizado`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.twitch.tv`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Directos de lunes a viernes`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.youtube.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Youtube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Tutoriales semanales`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.instagram.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Fotos nuevas cada semana`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.linkedin.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Curriculum actualizado`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesHeading css={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Comunidad`}
</RadixThemesHeading>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.twitch.tv`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Directos de lunes a viernes`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.youtube.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Youtube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Tutoriales semanales`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.instagram.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Fotos nuevas cada semana`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "#C3C7CB", "textDecoration": "none", "&:hover": null}}>
  <NextLink css={{"isExternal": true, "width": "100%"}} href={`https://www.linkedin.com`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#087ec4"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "100%", "flexDirection": "row"}} gap={`2`}>
  <LucideArrowRightIcon css={{"color": "var(--current-color)", "width": "2em", "height": "2em", "margin": "0.8em"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "0.5em", "paddingBottom": "0.5em", "paddingRight": "0.5em", "flexDirection": "column"}} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Poppins", "fontWeight": "500", "color": "#F1F2F4"}} size={`3`}>
  {`LinkedIn`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "color": "#C3C7CB"}} size={`1`}>
  {`Curriculum actualizado`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "2em", "paddingBottom": "2em", "flexDirection": "column"}} gap={`2`}>
  <img src={`favicon.ico`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#A3ABB2"}}>
  {`PGS © 2024 Reflex Inc.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
