import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(fallback="PGS", size="9"),
        rx.text("@pablogs"),
        rx.text("HOLAAAAAAA"),
        rx.text(
            """BLABBBBBBBBBBBLASKDRFLBKLSDKGFBLADKGBLSKDLGKBADLkgblkasdkgbkljdaslgkjbasdlkgjbkladjgklbdajb
                sdkgjbklsdjgbklsdjgklbjsdklgjbklsdjgklbdsjgklbjsdgklbjsdklgjbsdkljgbkljsdgklbsdjklgbjsdklgjbsk
                sdkgjbklsdjgbklsdjgklbjsdklgjbsdklgjbklsdjgbjkldjklbjdklgjbdklgjbklsdjgbklsdjgklbsdjgkbjsdk"""
        ),
    )
