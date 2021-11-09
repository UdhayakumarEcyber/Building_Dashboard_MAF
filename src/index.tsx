import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, Button, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
 



// const Building_Dashboard_Performance_Reliability: React.FunctionComponent<IWidgetProps> = (props) => {
//     return (
//         <WidgetWrapper className="wrapper reliabilityy">
//                 {/* <TitleBar title=' '></TitleBar>  */}
//             <div className="IconContainer"> 
//                 <div className="icon"></div> 
//             </div>
//             <div className="label">Performance &amp; Reliability</div>
//       </WidgetWrapper>
//     )
// };


// const Building_Dashboard_Maintenance_Services: React.FunctionComponent<IWidgetProps> = (props) => {
//     return (
//         <WidgetWrapper className="wrapper maintenance_services">
//                {/* <TitleBar title=' '></TitleBar>   */}
//             <div className="IconContainer"> 
//                 <div className="icon"></div> 
//             </div>
//             <div className="label">Maintenance Services </div>
//       </WidgetWrapper>
//     )
// };

// const Building_Dashboard_Savings: React.FunctionComponent<IWidgetProps> = (props) => {
//     return (
//         <WidgetWrapper className="wrapper savings">
//              {/* <TitleBar title=''></TitleBar>   */}
//             <div className="IconContainer"> 
//                 <div className="icon"></div> 
//             </div>
//             <div className="label">Savings</div>
//       </WidgetWrapper>
//     )
// };

// const Building_Dashboard_booking: React.FunctionComponent<IWidgetProps> = (props) => {
//     return (
//         <WidgetWrapper className="wrapper booking">
//               {/* <TitleBar title=''></TitleBar>   */}
//             <div className="IconContainer"> 
//                 <div className="icon"></div> 
//             </div>
//             <div className="label">Booking</div>
//       </WidgetWrapper>
//     )
// };  

// const Building_Dashboard_emergency: React.FunctionComponent<IWidgetProps> = (props) => {
//     return (
//         <WidgetWrapper className="wrapper emergency">
//               {/* <TitleBar title=''></TitleBar>    */}
//             <div className="IconContainer"> 
//                 <div className="icon"></div> 
//             </div>
//             <div className="label">Emergency</div>
//       </WidgetWrapper>
//     )
// };


const Building_Dashboard_DigitalTwin: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("sample text");
    let [date, setDate] = React.useState<Date>(new Date())

    return (
        <WidgetWrapper className="building_maf">
            

            <TitleBar title='DIGITAL TWIN' icon="https://static.iviva.com/images/Adani_UXP/hotdesking-icon.svg">  

            
                               <div className="rht-title-section">

                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "MADINAH", value: "op-1" },
                                            { label: "MAKKAH", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />

                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "PULLMAN", value: "op-1" },
                                            { label: "RUA AL", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                                
                             

                                <Select
                                        selected={selected}
                                        options={[
                                            { label: "GROUND FLOOR", value: "op-1" },
                                            { label: "FIRST FLOOR", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />


                            <FilterPanel
                                enableClear={inputValue?.length > 0 || selected != null}
                                onClear={() => { setInputValue(""); setSelected(null) }}  className="calender" >
                                <FormField className="no-padding mb-only">
                                    <Label>Sort By</Label>
                                    <DatePicker
                                        title="Date"
                                        date={date}
                                        onChange={(date) => setDate(date)}
                                        options={{
                                            disableWeekEnds: true
                                        }}
                                    />
                                </FormField> 
                            </FilterPanel>

                            <FilterPanel
                                enableClear={inputValue?.length > 0 || selected != null}
                                onClear={() => { setInputValue(""); setSelected(null) }} >
                                
                                <FormField className="no-padding mb-only">
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        value={inputValue}
                                        onChange={(value) => { setInputValue(value) }}
                                        isValid={inputValue ? inputValue.trim().length > 0 : null}
                                        hasIndicator
                                        placeholder="placeholder"
                                    />
                                </FormField>
                            </FilterPanel>

                          </div>
                                
                            
            </TitleBar> 
           
      </WidgetWrapper>
    )
};
 




const Mall_Health_Widget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1");
    let [inputValue, setInputValue] = React.useState<string | null>("sample text");
    let [date, setDate] = React.useState<Date>(new Date())


    
const list = [
    {
        id: 'a',  
        "energy" : "HVAC",
        "icon": "https://static.iviva.com/images/UXP_spaceworks/air-conditioner.svg", 
        "top_label": 75,
        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
        "bot_label": 25,
        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
    },
    {
        id: 'b',  
        "energy" : "Lighting",
        "icon": "https://static.iviva.com/images/UXP_spaceworks/light.svg", 
        "top_label": 75,
        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
        "bot_label": 25,
        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
    },
    {
        id: 'c',  
        "energy" : "Elevators",
        "icon": "https://static.iviva.com/images/UXP_spaceworks/elevater.png",
        "top_label": 75,
        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
        "bot_label": 25,
        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
    },
    {
        id: 'd', 
        "energy" : "Fire alarm",
        "icon": "https://static.iviva.com/images/UXP_spaceworks/Fire_Alarm.svg",
        "top_label": 75,
        "green_icon" : "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
        "bot_label": 25,
        "red_icon" : "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png" 
    },
  ];

    return (
        <WidgetWrapper> 
            <TitleBar title='PULLMAN HOTEL' icon="https://static.iviva.com/images/Adani_UXP/cafeteria-icon.svg">  
            </TitleBar> 


            <div id="Almasjid_Widget">   

            <div className="list-boxes" > 

                    <ul>
                        {list.map((item) => (
                            <li key={item.id}> 
                               <div className="box">
                                    <div className="box-top">
                                        <label className="label">{item.top_label}</label>
                                        <span className="top-icon">
                                            <img src={item.green_icon} />
                                        </span>
                                    </div>

                                    <div className="box-item">
                                        <div className="box-cont"> 
                                            <div className="icon box-items_icon">
                                                <img src={item.icon} />
                                            </div>
                                            <p>{item.energy.toUpperCase()}</p>
                                        </div>
                                    </div>

                                    <div className="box-bot">
                                        <label className="label">{item.bot_label}</label>
                                        <span className="bot-icon">
                                            <img src= {item.red_icon} />
                                        </span>
                                    </div>
                                </div>    
                            </li>
                        ))}
                        </ul>  

                        </div>

</div>
           
      </WidgetWrapper>
    )
};
 



/**
 * Register as a Widget
//  */
// registerWidget({
//     id: "Building_Dashboard_Performance_Reliability",
//     widget: Building_Dashboard_Performance_Reliability,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

// registerWidget({
//     id: "Building_Dashboard_Maintenance_Services",
//     widget: Building_Dashboard_Maintenance_Services,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });
// registerWidget({
//     id: "Building_Dashboard_Savings",
//     widget: Building_Dashboard_Savings,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

// registerWidget({
//     id: "Building_Dashboard_booking",
//     widget: Building_Dashboard_booking,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

// registerWidget({
//     id: "Building_Dashboard_emergency",
//     widget: Building_Dashboard_emergency,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });
 

registerWidget({
    id: "Building_Dashboard_DigitalTwin",
    widget: Building_Dashboard_DigitalTwin,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});
 
 

registerWidget({
    id: "Mall_Health_Widget",
    widget: Mall_Health_Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});
 

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Building_Dashboard_MAF",
    label: "Building_Dashboard_MAF",
    // click: () => alert("Hello"),
    component: Building_Dashboard_MAFWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Building_Dashboard_MAF",
    component: Building_Dashboard_MAFWidget
});
*/