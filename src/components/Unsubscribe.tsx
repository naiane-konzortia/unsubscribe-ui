import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input, Label } from "reactstrap";
import {AiOutlineMail} from "react-icons/ai"

export const Unsubscribe = () => {


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
    email: yup.string().required("Required field."),
    })
  );
  const methods = useForm({resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const unsubscribe = () => {

  }





  return (
    <>
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
          <div className=" flex flex-col center-div ">
          <div className=" w-full ">
                    <Input
                      type="text"
                      name="email"
                      register={register}
                      errors={errors}
                      control={control}
                      className="form-control font-timeline-form font-label"
                    />
                  </div>
            <Button className="btn mt-10 font-label px-20 flex center-div md:each-wrap lg:each-wrap w-full md:w-8/12 lg:w-8/12 font-size-14" onClick={unsubscribe}>
              UNSUBSCRIBE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
