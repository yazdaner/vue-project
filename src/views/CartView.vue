<script setup>
</script>
<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-12 pl-3 pt-3">
          <table class="table table-hover border bg-white">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th style="width: 10%">Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle">
                  <div class="row">
                    <div class="col-lg-2">
                      <img
                        src="http://nicesnippets.com/demo/sc-images.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-lg-10">
                      <h5>Lorem ipsum</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </td>
                <td class="align-middle">12000</td>
                <td class="align-middle">
                  <button class="btn btn-sm btn-dark me-2">+</button>
                  <span>3</span>
                  <button class="btn btn-sm btn-dark ms-2">-</button>
                </td>
                <td class="align-middle">12000</td>
                <td class="align-middle" style="width: 15%">
                  <button class="btn btn-danger btn-sm">delete</button>
                </td>
              </tr>
              <tr>
                <td class="align-middle">
                  <div class="row">
                    <div class="col-lg-2">
                      <img
                        src="http://nicesnippets.com/demo/sc-KHIP6xxGLD-webres.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-lg-10">
                      <h5>Lorem ipsum</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </td>
                <td class="align-middle">35000</td>
                <td class="align-middle">
                  <button class="btn btn-sm btn-dark me-2">+</button>
                  <span>4</span>
                  <button class="btn btn-sm btn-dark ms-2">-</button>
                </td>
                <td class="align-middle">35000</td>
                <td class="align-middle" style="width: 15%">
                  <button class="btn btn-danger btn-sm">delete</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <a href="#" class="btn btn-dark">Clear Cart</a>
                </td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center" style="width: 15%">
                  <strong>Total : 47000</strong>
                </td>
                <td>
                  <a href="#" class="btn btn-success btn-block">Checkout</a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </template>
