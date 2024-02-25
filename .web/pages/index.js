/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
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
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "blue", "padding": "16px", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"height": "40px"}}>
  {`Pablo GS`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesAvatar fallback={`PGS`} size={`9`}/>
  <RadixThemesText as={`p`}>
  {`@pablogs`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`HOLAAAAAAA`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`BLABBBBBBBBBBBLASKDRFLBKLSDKGFBLADKGBLSKDLGKBADLkgblkasdkgbkljdaslgkjbasdlkgjbkladjgklbdajb
                sdkgjbklsdjgbklsdjgklbjsdklgjbklsdjgklbdsjgklbjsdgklbjsdklgjbsdkljgbkljsdgklbsdjklgbjsdklgjbsk
                sdkgjbklsdjgbklsdjgklbjsdklgjbsdklgjbklsdjgbjkldjklbjdklgjbdklgjbklsdjgbklsdjgklbsdjgkbjsdk`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"isExternal": true}} href={`https://www.twitch.tv`} passHref={true}>
  <RadixThemesButton>
  {`Twitch`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"isExternal": true}} href={`https://www.youtube.com`} passHref={true}>
  <RadixThemesButton>
  {`Youtube`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"isExternal": true}} href={`https://www.instagram.com`} passHref={true}>
  <RadixThemesButton>
  {`Instagram`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true}>
  <NextLink css={{"isExternal": true}} href={`https://www.linkedin.com`} passHref={true}>
  <RadixThemesButton>
  {`LinkedIn`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <img src={`favicon.ico`}/>
  <RadixThemesText as={`p`}>
  {`© 2024 Reflex Inc.`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
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
