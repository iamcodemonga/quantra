import { Ticker } from "react-tradingview-embed"

const TickWidget = () => {
    return (
        <Ticker widgetProps={{ colorTheme: "dark", symbols: [
            {
                "description": "GBP to USD",
                "proName": "FX:GBPUSD"
            },
            {
                "description": "USD to CAD",
                "proName": "FX:USDCAD"
            },
            {
                "description": "EUR to GBP",
                "proName": "FX:EURGBP"
            },
            {
                "description": "EUR to JPY",
                "proName": "FX:EURJPY"
            },
        ]}} />
    )
}

export default TickWidget