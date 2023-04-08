import React from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./week3.css";

function Week3() {
  const [toggle, setToggle] = useState(false);
  const [collapse, setCollapse] = useState(false);
  function toggleOpen() {
    setToggle(!toggle);
  }
  function collapseOpen() {
    setCollapse(!collapse);
  }
  return (
    <div>
      <h1 className="title">Week 3 과제 : Nav bar, List Group, Modal 만들기</h1>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          📞 Contact
        </NavbarBrand>
        <NavbarToggler onClick={collapseOpen} className="mr-2" />
        <Collapse isOpen={collapse} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/Doozuu">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://velog.io/@049494">Velog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:049494@ewhain.net">Gmail</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <br />
      <ListGroup>
        <h4 className="sub_title">활동내역</h4>
        <ListGroupItem>1. 교외 딥러닝 스터디</ListGroupItem>
        <ListGroupItem>2. 휴먼기계바이오공학부 밴드부 하루달</ListGroupItem>
        <ListGroupItem>
          3. 휴먼기계바이오공학부 의공학트랙 동아리 MedExp
        </ListGroupItem>
        <ListGroupItem>4. 지역 XR 챌린지 공모전 참여</ListGroupItem>
        <ListGroupItem>5. 디지털 오픈 이노베이션 공모전 참여</ListGroupItem>
        <ListGroupItem>
          6. 디지털 헬스케어 2021 Medical hack 최우수상
        </ListGroupItem>
        <ListGroupItem>7. 교내 앱개발 교육 프로그램 참여</ListGroupItem>
        <ListGroupItem>8. 교내 로블록스 교육 프로그램 참여</ListGroupItem>
        <ListGroupItem>9. 교외 웹개발 스터디 </ListGroupItem>
        <ListGroupItem>10. 교내 웹개발 스터디 CodingStage</ListGroupItem>
        <ListGroupItem>11. 교내 웹개발 동아리 EFUB</ListGroupItem>
        <ListGroupItem>12. 교외 프론트엔드 스터디 운영</ListGroupItem>
      </ListGroup>
      <br />
      <div className="button_container">
        <Button color="primary" onClick={toggleOpen} className="button">
          알림 보내기
        </Button>
      </div>
      <Modal isOpen={toggle} toggle={toggleOpen}>
        <ModalHeader toggle={toggleOpen}>알림</ModalHeader>
        <ModalBody>알림을 보내시겠습니까?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleOpen}>
            ok
          </Button>
          <Button color="secondary" onClick={toggleOpen}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Week3;
