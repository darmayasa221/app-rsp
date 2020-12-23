import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import {FormLogin} from '../components/Form/FormLogin/FormLogin';
import Swal from "sweetalert2";


  describe('input',() => {
    it('Ketika username dan password benar', async ()=>{
        const { queryByTitle }  = render(<FormLogin/>)
        const sub = queryByTitle('sub')
        const user = queryByTitle("username")
        const pass = queryByTitle('password') 
      await act( async () =>{
        fireEvent.change(user,{target:{value:'admin'}})
        fireEvent.change(pass,{target:{value:'admin'}})
        expect(user.value).toBe('admin')
        expect(pass.value).toBe('admin')
      })
      await act(async () => {
        fireEvent.submit(sub);
      })
    expect(Swal.getTitle().textContent).toBe('Login Success')
      })
  })
  
  describe('password',() => {
    it('ketika password kosong', async ()=>{
        const { queryByTitle}  = render(<FormLogin/>)
        const user = queryByTitle("username")
      await act( async () =>{
        fireEvent.change(user,{target:{value:'admin'}})
        expect(user.value).toBe('admin')
      })
      await act(async () => {
        fireEvent.submit(queryByTitle('sub'));
      })
    expect(Swal.getTitle().textContent).toBe('Password Kosong!')
      })
  })
  describe('username',() => {
    it('ketika username kosong', async ()=>{
        const { queryByTitle}  = render(<FormLogin/>)
        const pass = queryByTitle('password') 
      await act( async () =>{
        fireEvent.change(pass,{target:{value:'admin'}})
        expect(pass.value).toBe('admin')
      })
      await act(async () => {
        fireEvent.submit(queryByTitle('sub'));
      })
    expect(Swal.getTitle().textContent).toBe('Username Kosong!')
      })
  })


