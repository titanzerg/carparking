import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Modal, Button, Input, Grid, Form } from 'semantic-ui-react'



class FrmIn extends Component {


  render() {

    return (
      <Modal open={this.props.open} id='checkinPopup'>
        <Modal.Header>Check In</Modal.Header>
        <Modal.Content image>

          <Modal.Description>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <img style={{ width: '300px' }} id="imageCheckin" src='https://f.ptcdn.info/870/053/000/owyxsmiy82CtwVCpV1x-o.jpg' />
                </Grid.Column>
                <Grid.Column>
                  <Form>
                    <Form.Field>
                      <label>ทะเบียนรถ</label>
                      <Input placeholder='ทะเบียนรถ' name='car_number' id='inputCarNumber'   />
                    </Form.Field>
                    <Form.Field>
                      <label>RFID</label>
                      <Input placeholder='RFID' name='rfid' id='inputRFID'  />
                    </Form.Field>
                    <Button type='button'   id="btnSubmitCheckin" primary>Check In</Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
FrmIn.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default FrmIn;
