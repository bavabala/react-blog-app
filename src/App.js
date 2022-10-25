
import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from '../src/components/form.component';

// create our App



function App() {
  return (
   <div>
      <div class="header">
      <header class="text-align-center">
        <div class="row">
          <div class="col-1 fa-bars-1">
            <i class="fa fa-bars"></i>
          </div>
          <div class="col-11">
            <h3>VEHICLE / EQUIPMENT REGISTRATION FORM</h3>
          </div>
        </div>
      </header>
    </div>
    <div class="container">
      <div class="row mt-5 mb-3">
        <div class="col-12 text-align-center">
          <button type="button" class="icon-top">S</button>
          <button type="button" class="icon-top ml-2">C</button>
          <button type="button" class="icon-top ml-2">V</button>
          <button type="button" class="icon-top ml-2">H</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="first-form-left">
            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Type:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Code:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vehicle Reg./SI.No:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Mode:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vendor Code:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="second-form-right">
            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Type:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Code:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vehicle Reg./SI.No:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Mode:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vendor Code:</label>
              </div>
              <div class="col-8">
                <select class="form-control" id="sel1" name="sellist1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <div class="thrid-form-left">
            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Type:</label>
              </div>
              <div class="col-8">
                <input type="date" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Code:</label>
              </div>
              <div class="col-8">
                <input type="date" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vehicle Reg./SI.No:</label>
              </div>
              <div class="col-8">
                <input type="date" class="form-control" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="fourth-form-right">
            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Equipment Code:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4 text-align-right">
                <label>Vehicle Reg./SI.No:</label>
              </div>
              <div class="col-8">
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 text-align-center">
          <button type="button" class="btn btn-primary"> Save </button>
          <button type="button" class="btn btn-primary ml-2"> Cancel </button>
          <button type="button" class="btn btn-primary ml-2"> View </button>
          <button type="button" class="btn btn-primary ml-2"> Home </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;