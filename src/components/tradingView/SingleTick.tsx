import { SingleTicker } from "react-tradingview-embed"

const SingleTick = ({ symbol }: { symbol: string }) => {
    return (
        <SingleTicker widgetProps={{ symbol, width: "100%", isTransparent: false, colorTheme: "dark" }} />
    )
}

export default SingleTick