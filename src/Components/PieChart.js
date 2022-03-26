import { PieChart } from "react-minimal-pie-chart";

function CafPieChart() {
    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.title}}
                labelStyle={{fontSize: "3px", fontWeight: 600, fill: "#ffffff"}}
                radius={20}
                center={[25, 25]}
                viewBoxSize={[50, 60]}
                labelPosition={70}
                data={[
                    {key: 1, value: 5, color: '#0083e2'},
                    {key: 2, value: 10, color: '#0079d1'},
                    {key: 3, value: 15, color: '#0072c5'},
                    {key: 4, value: 20, color: '#0064ad'},
                    {key: 5, value: 25, color: '#005a9c'},
                ]}
            />
        </>  
    );
}

export default CafPieChart;