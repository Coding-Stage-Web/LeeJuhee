import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert,
} from "reactstrap";

function AlertAndDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alertColor, setAlertColor] = useState("danger");
  const [alertText, setAlertText] = useState(
    "미션 : Dropdown에서 [미션 수행] 클릭하기."
  );

  function DropDownOpen() {
    setDropdownOpen(!dropdownOpen);
  }

  function Mission() {
    setAlertColor("success");
    setAlertText("미션 성공!");
  }

  return (
    <>
      <Alert color={alertColor} style={{ width: 500, margin: "auto" }}>
        {alertText}
      </Alert>
      <ButtonDropdown isOpen={dropdownOpen} toggle={DropDownOpen}>
        <DropdownToggle caret> Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href="http://example.com/">
            <DropdownItem>example 웹 사이트로 이동</DropdownItem>
          </a>
          <DropdownItem onClick={Mission}>미션 수행</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
}

export default AlertAndDropdown;
