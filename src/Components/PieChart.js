import { PieChart } from "react-minimal-pie-chart";

function CafPieChart() {

    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.title}}
                labelStyle={{fontSize: "3px", fontWeight: 600, fill: "#ffffff"}}
                radius={35}
                center={[50, 50]}
                viewBoxSize={[100, 100]}
                labelPosition={70}
                data={[
                    {key: 1, title: "", value: 5, color: '#0083e2'},
                    {key: 2, title: "", value: 10, color: '#0079d1'},
                    {key: 3, title: "", value: 15, color: '#0072c5'},
                    {key: 4, title: "", value: 20, color: '#0064ad'},
                    {key: 5, title: "", value: 25, color: '#005a9c'},
                ]}
            />
        </>  
    );
}

export default CafPieChart;