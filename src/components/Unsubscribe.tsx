import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Label } from "reactstrap";
import {AiOutlineMail} from "react-icons/ai"
import { useRedux } from "../hooks";
import FormInput from "./FormInput";
import { unsubscribe } from "../redux/actions";

export const Unsubscribe = () => {
  const { dispatch, useAppSelector } = useRedux();
  const { isUnsubscribed } = useAppSelector((state) => ({
    isUnsubscribed: state.Email.isUnsubscribed,
  }));

  const customStylesCountries = {
    control: () => ({
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      borderRadius: "6px",
      background: "white",
      padding: "6px 3px 3px 6px",
      color: "#BDBDBD",
      border: "1px solid lighten(#737373 , 2%)",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
      alignItems: "left",
      justifyContent: "left",
    }),
    option: () => ({
      cursor: "pointer",
      fontSize: "14px",
      marginBottom: "2px",
      padding: "10px",
      color: "#BDBDBD",
      "&:hover": {
        background: "#E0FF4F",
        color: "black",
      },
    }),
  };

  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("This field is required."),
    })
  );

  const defaultValues: any = {
    email: "",
  };

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;


  const [isDisabled, setIsdisabled] = useState(true)

  const onSubmit = (values:any) => {
    console.log(values)
    dispatch(unsubscribe({email: values.email}))

  }





  return (
    <>
    {
      !isUnsubscribed ?
<section className="bg-gray py-20 w-3/5 rounded drop-shadow-xl">
      <div className="center-div">
          <span className="font-label-black text-xl md:text-2xl lg:text-2xl">We're sorry to see you go!</span>
          </div>
      <div className="center-div">
          <span className="font-label-black text-xs md:text-sm lg:text-sm m-2"> Enter your email address to unsubscribe from this list.</span>
          </div>
        <div className="container p-6">
        <Label className="font-label-black text-xs md:text-sm lg:text-sm">
          <div className="m-1">
          <AiOutlineMail size={12}/>
          </div>
          Email Address</Label>
          <div className=" flex flex-col ">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" w-full ">
          <FormInput
                  type="email"
                  name="email"
                  control={control}
                  errors={errors}
                  register={register}
                  placeholder="Enter your email"
                  className="form-control font-label font-size-14 "
                  hidePasswordButton={true}
                />
                  </div>
          <div className=" mt-6 flex flex-row">
                    <Input
                      type="checkbox"
                      name="confirm"
                      register={register}
                      errors={errors}
                      control={control}
                      className=""
                      onClick={() => setIsdisabled(!isDisabled)}
                    />
                    <span className="ml-2 font-label-black font-size-12">I am aware that I will not receive any updates from Konzortia anymore.</span>
                  </div>
                  <div className="center-div flex">
            <button type="submit" disabled={isDisabled} className="btn mt-10 font-label px-20 center-div flex md:each-wrap lg:each-wrap w-full md:w-4/12 lg:w-4/12 font-size-14" >
              UNSUBSCRIBE
            </button>
            </div>
            </form>
          </div>
        </div>
      </section>
      :
      <section className="bg-gray py-20 w-3/5 rounded drop-shadow-xl">
      <div className="center-div">
          <span className="font-label-black text-xl md:text-2xl lg:text-2xl">Email address unsubscribed!</span>
          </div>
      </section>
    }

      
    </>
  );
};
