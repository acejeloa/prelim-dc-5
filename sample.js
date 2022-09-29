//  <Button variant="primary" onClick={handleShow}>
//                       Edit
//                     </Button>

//                     <Modal show={show} onHide={handleClose}>
//                       <Modal.Header>
//                         <Modal.Title>Edit Visitor</Modal.Title>
//                         <Button variant="secondary" onClick={handleClose}>
//                           Close
//                         </Button>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <div className="form">
//                           <label htmlFor="lastname">Lastname</label>
//                           <br />
//                           <input
//                             type="text"
//                             name="lastname"
//                             onChange={(e) => {
//                               setLastname(e.target.value);
//                             }}
//                             value={visitor.lastname}
//                             className="w-100"
//                           />
//                           <br />
//                           <label htmlFor="firstname">Firstname</label>
//                           <br />
//                           <input
//                             type="text"
//                             name="firstname"
//                             onChange={(e) => {
//                               setFirstname(e.target.value);
//                             }}
//                             value={visitor.firstname}
//                             className="w-100"
//                           />
//                           <br />
//                           <label htmlFor="purpose">Purpose</label>
//                           <br />
//                           <input
//                             type="text"
//                             name="purpose"
//                             onChange={(e) => {
//                               setPurpose(e.target.value);
//                             }}
//                             value={visitor.purpose}
//                             className="w-100"
//                           />
//                           <br />
//                           <label htmlFor="date">Date</label>
//                           <br />
//                           <input
//                             type="date"
//                             name="purpose"
//                             onChange={(e) => {
//                               setDate(e.target.value);
//                             }}
//                             value={visitor.date}
//                             className="w-100"
//                           />
//                           <br />
//                           <button
//                             onClick={addVisitor}
//                             className="btn btn-success btn-sm mt-3 w-100"
//                           >
//                             Update
//                           </button>
//                         </div>
//                       </Modal.Body>
//                       <Modal.Footer></Modal.Footer>
//                     </Modal>
//                   </td>
