import React, { Component } from "react";
import moment from "moment";

export default class componentName extends Component {
  state = {
    time: [
      {
        id: "111",
        name: "Mohamed Zajith",
        start: "2020-01-20T08:30",
        end: "2020-01-20T12:00",
        title: "Mohamed Zajith ( 08:30 - 12:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "morning"
      },
      {
        id: "118",
        name: "Gobi",
        start: "2020-01-22T13:30",
        end: "2020-01-22T22:00",
        title: "Gobi Zajith ( 13:30 - 19:00)",
        department: "BAR",
        dep_id: "013",
        dep_color: "#FFC16C",
        shift: "evening"
      },
      {
        id: "118",
        name: "Gobi",
        start: "2020-01-21T09:00",
        end: "2020-01-21T13:00",
        title: "Gobi ( 09:00 - 13:00)",
        department: "SERVICE",
        dep_id: "012",
        dep_color: "#2BB1E2",
        shift: "morning"
      },
      {
        id: "118",
        name: "Gobi",
        start: "2020-01-20T14:30",
        end: "2020-01-20T19:00",
        title: "Gobi ( 14:30 - 19:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "evening"
      },
      {
        id: "113",
        name: "Adhn",
        start: "2020-01-23T09:30",
        end: "2020-01-23T12:00",
        title: "Adhn ( 09:30 - 12:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "morning"
      },
      {
        id: "113",
        name: "Adhn",
        start: "2020-01-25T09:30",
        end: "2020-01-25T20:00",
        title: "Adhn ( 09:30 - 20:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "FullTime"
      },
      {
        id: "112",
        name: "Hari",
        start: "2020-01-25T09:00",
        end: "2020-01-25T13:00",
        title: "Gobi ( 09:00 - 13:00)",
        department: "SERVICE",
        dep_id: "014",
        dep_color: "#2BB1E2",
        shift: "FullTime"
      },
      {
        id: "111",
        name: "Mohamed Zajith",
        start: "2020-01-22T13:30",
        end: "2020-01-22T22:00",
        title: "Mohamed Zajith ( 13:30 - 19:00)",
        department: "BAR",
        dep_id: "013",
        dep_color: "#FFC16C",
        shift: "evening"
      },
      {
        id: "114",
        name: "saamy",
        start: "2020-01-23T09:30",
        end: "2020-01-23T19:00",
        title: "saamy ( 09:30 - 19:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "FullTime"
      },
      {
        id: "113",
        name: "Adhn",
        start: "2020-01-21T09:30",
        end: "2020-01-21T12:00",
        title: "Adhn ( 09:30 - 12:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "FullTime"
      },
      {
        id: "111",
        name: "Ram",
        start: "2020-01-26T13:30",
        end: "2020-01-26T22:00",
        title: "Ram ( 13:30 - 19:00)",
        department: "BAR",
        dep_id: "013",
        dep_color: "#FFC16C",
        shift: "evening"
      },
      {
        id: "111",
        name: "Mohamed Zajith",
        start: "2020-01-20T13:30",
        end: "2020-01-20T22:00",
        title: "Mohamed Zajith ( 13:30 - 19:00)",
        department: "BAR",
        dep_id: "013",
        dep_color: "#FFC16C",
        shift: "morning"
      },
      {
        id: "118",
        name: "Gobi",
        start: "2020-01-24T09:00",
        end: "2020-01-24T13:00",
        title: "Gobi ( 09:00 - 13:00)",
        department: "SERVICE",
        dep_id: "012",
        dep_color: "#2BB1E2",
        shift: "morning"
      },
      {
        id: "113",
        name: "Adhn",
        start: "2020-01-24T09:30",
        end: "2020-01-24T12:00",
        title: "Adhn ( 09:30 - 12:00)",
        department: "COOK",
        dep_id: "011",
        dep_color: "#ad2171",
        shift: "FullTime"
      }
    ],
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    shift: [
      { key: "morning", value: "Morning" },
      { key: "evening", value: "Evening" },
      { key: "FullTime", value: "Full time" }
    ]
  };

  rendeTableHeaderDay() {
    return this.state.days.map((value, index) => {
      return (
        <td
          style={{
            textAlign: "center",
            padding: "8px"
          }}
        >
          <div style={{ fontWeight: "bold", color: "#4E5983",font:'Poppins',fontSize:'16px' }}>
            {value}
           </div>
          <div style={{textAlign:'center',color: "#4E5983",font:'Poppins',fontSize:'12px'}}>
            {moment(this.state.time[0].start).format("DD MMM")}
          </div>
        </td>
      );
    });
  }

  renderShifts() {
    return this.state.shift.map((value, index) => {
      return (
        <tr
          style={{
            border: "2px dotted #dddddd",
            textAlign: "left",
            padding: "8px",
            backgroundColor:'#f4eeff',
          }}
        >
          {value.value}
          {this.renderDaysSchedule(value.key)}
        </tr>
      );
    });
  }

  renderDaysSchedule = shift => {
    return this.state.days.map((value, index) => {
      return <td>
        {this.renderSchedule(value, shift)}
        </td>;
    });
  };

  renderSchedule = (day, shift) => {
    return this.state.time.map((value, index) => {
      if (moment(value.start).format("dddd") === day && value.shift === shift) {
        return (
          <tr
            style={{
              textAlign: "left",
              padding: "8px",
            }}
          >
            <div
              style={{
                border: "1px solid",
                borderColor:'#E7E8EA',
                borderRadius: 6,
                padding: 10,
                margin: 3,
                textAlign:'center',
                color:'#4E5983',
                fontWeight:'Regular',
                font:'Poppins',
                opacity:1,
                backgroundColor:'white'
              }}
              >
                <div 
                  style={{
                          backgroundColor:value.dep_color,
                          textAlign:'center',
                          fontWeight:'SemiBold',
                          font:'Poppins',
                          letterSpacing:'0',
                          borderRadius:'6px',
                          color:'white',
                          opacity:1,
                          fontSize:'13px'
                          }}>
                  {value.department}
                </div>
              {value.name}{" "}
              <div style={{textAlign:'center'}}>
                {moment(value.start).format("HH:mm")} -{" "}
                {moment(value.end).format("HH:mm")}
              </div>
            </div>
          </tr>
        );
      }
    });
  };

  render() {
    return (
      <div>
        <table
          style={{ borderCollapse: "collapse", width: "100%" }}
          id="schedule"
        >
          <tr>
            <td
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            ></td>
              {this.rendeTableHeaderDay()}
              </tr>

          {this.renderShifts()}
        </table>
      </div>
    );
  }
}
