*** Settings ***
Library   Selenium2Library

Resource   ${EXECDIR}/e2e/resource/keyword.robot
Resource   ${EXECDIR}/e2e/resource/variable.robot
Test Teardown      close browser

*** Variables ***

${urlmainpage}    http://localhost:3000/

*** Test Cases ***

test เช็กอินปกติได้
  open browser      ${urlmainpage}      gc 

  #กดคริกปุ่ม in
  Wait Until Page Contains Element       btnIn
  click element     btnIn

  #Check found popup
  Wait Until Page Contains Element      frmIn

  #ใส่ข้อมูล ทะเบียนรถ
  Wait Until Page Contains Element      txtRe
  Input Text          txtRe     7777




