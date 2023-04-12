import Svg, { G, Rect } from "react-native-svg";
import { View, Image } from "react-native-web";

function Loading() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Image 
                source={require("../../../assets/logotipo.png")}
                style={{ width: 250, height: 250 }}
            />
            <Svg xmlns="http://www.w3.org/2000/svg" width={75} height={75} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <G transform="rotate(0 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(30 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(60 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(90 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(120 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(150 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(180 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(210 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(240 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(270 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(300 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                    </Rect>
                </G><G transform="rotate(330 50 50)">
                    <Rect x="48.5" y="24" rx="0" ry="0" width={3} height={12} fill="#e8554c">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                    </Rect>
                </G>
            </Svg>
        </View>
    );
}

export default Loading;