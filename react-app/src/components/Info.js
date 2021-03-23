// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Drawer, Tag, Button } from "antd";
// import { deleteHost, seeHost, seeHostEvent } from "../store/host";

// // import { DeleteOutlined, CalendarTwoTone } from "@ant-design/icons";

// const Info = ({ host }) => {
//   const [desc, setDesc] = useState();
//   const [status, setStatus] = useState();
//   const [priority, setPriority] = useState();

//   const hostId = host.id;
//   const eventId = events.id;
//   console.log(hostId);

//   const dispatch = useDispatch();

//     const onHostUpdate = async (e) => {
//       e.preventDefault();
//       event = { desc, priority, status };
//       const res = await fetch(`/api/tasks/update/${hostId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(host),
//       });
//       const data = await res.json();
//       if (projectID) {
//         dispatch(seeProjectTask(projectID));
//       } else {
//         dispatch(seeTask());
//       }
//     };

//   const deleteOEventHost = async () => {
//     await dispatch(deleteHost(host.id));
//     if (eventId) {
//       dispatch(seeHostEvent(eventId));
//     } else {
//       dispatch(seeHost());
//     }
//   };


//   return (
//     host !== undefined && (
//       <div>
//         <button className="task_submit_button" onClick={showDrawer}>
//           More info
//         </button>
//         <Drawer
//           title="Task Menu"
//           placement="right"
//           onClose={onClose}
//           visible={visible}
//           width={"50vh"}
//           height={"100%"}
//           bodyStyle={{
//             backgroundColor: "white",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <form onSubmit={onTaskUpdate}>
//             <h1 className="task_info_title">{task.taskTitle}</h1>
//             <h4 className="task_menu_text">
//               Due date: {task.dueDate.slice(0, 16)} <CalendarTwoTone />
//             </h4>
//             <h4 className="task_menu_text">Projects:</h4>
//             <h4 className="task_menu_text">
//               Priority: {taskType(task.priority)}
//             </h4>
//             {editVisibility && (
//               <div className="choose_status">
//                 <button className="status_button" value="Low">
//                   {taskType("Low")}
//                 </button>
//                 <button className="status_button" value="Medium">
//                   {taskType("Medium")}
//                 </button>
//                 <button className="status_button" value="High">
//                   {taskType("High")}
//                 </button>
//               </div>
//             )}
//             <h4 className="task_menu_text">
//               Status: {statusType(task.status)}
//             </h4>
//             {editVisibility && (
//               <div className="choose_status">
//                 <button className="status_button" value="Incomplete">
//                   {statusType("Incomplete")}
//                 </button>
//                 <button className="status_button" value="In Progress">
//                   {statusType("In Progress")}
//                 </button>
//                 <button className="status_button" value="Need Help">
//                   {statusType("Need Help")}
//                 </button>
//                 <button className="status_button" value="Complete">
//                   {statusType("Complete")}
//                 </button>
//               </div>
//             )}
//             <h4 className="task_menu_text">Description:</h4>
//             <textarea
//               className="task_menu_textarea"
//               placeholder="Enter a description"
//               onChange={(e) => setDesc(e.target.value)}
//             >
//               {task.description}
//             </textarea>

//             <div className="bottom_buttons">
//               <div>
//                 <Button type="primary" onClick={editForm}>
//                   Edit Task
//                 </Button>
//                 {editVisibility && (
//                   <Button htmlType="submit">Submit Edits</Button>
//                 )}
//               </div>
//               <Button type="primary" shape="circle" onClick={deleteOneHost}>
//               </Button>
//             </div>
//           </form>
//         </Drawer>
//       </div>
//     )
//   );
// };

// export default Info;
