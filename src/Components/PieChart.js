import { PieChart } from "react-minimal-pie-chart";

function CafPieChart() {

    return(
        <>
            <PieChart
                label={(props) => {return props.dataEntry.title}}
                labelStyle={{fontSize: "5px"}}
                data={[
                    {title: "Object 1", value: 10, color: '#E38627'},
                    {title: "Object 2", value: 20, color: '#C13C37'},
                    {title: "Object 2", value: 15, color: '#6A2135'},

                ]}
            />
        </>  
    );
}

export default CafPieChart;