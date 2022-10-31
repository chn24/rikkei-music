import * as yup from "yup";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsXSquare } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { getTime } from "../../../../utils/covert.";

const validationSchema = yup.object({
  link: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Dân chơi hãy nhập link bài hát"
    )
    .required("Dân chơi hãy nhập link bài hát"),
  songName: yup
    .string("Dân chơi hãy nhập tên bài hát ")
    .required("Dân chơi hãy nhập tên bài hát"),
  message: yup
    .string("Dân chơi muốn gửi lời nhắn gì")
    .required("Dân chơi hãy để lại lời nhắn"),
  sender: yup.string(),
  receiver: yup.string(),
});

const OrderForm = ({ setFormToggle, data, mutation }) => {
  const formik = useFormik({
    initialValues: {
      link: "",
      songName: "",
      message: "",
      sender: "",
      receiver: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await orderMusic(values);
    },
  });

  const formBoxRef = useRef(null);
  const formRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const RefStopPstopPropagation = (e) => {
      e.stopPropagation();
    };

    const handleBtnClose = () => {
      setFormToggle(false);
    };

    const handleFormBoxClose = () => {
      setFormToggle(false);
    };
    formBoxRef.current?.addEventListener("click", handleFormBoxClose);
    formRef.current.addEventListener("click", RefStopPstopPropagation);
    btnRef.current.addEventListener("click", handleBtnClose);
    return () => {
      formBoxRef.current?.removeEventListener("click", handleFormBoxClose);
      formRef.current?.removeEventListener("click", RefStopPstopPropagation);
      btnRef.current?.removeEventListener("click", handleBtnClose);
    };
  }, []);

  const orderMusic = async (values) => {
    console.log(data);
    let arr;
    if (data === undefined) {
      arr = [];
    } else {
      arr = [...data];
    }
    arr.unshift({ ...values, time: getTime() });
    console.log(arr);
    const putdata = {
      list: arr,
    };
    mutation.mutate(putdata);

    // await axios
    //   .put("https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1", putdata)
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div ref={formBoxRef} className="formBox">
      <Form
        ref={formRef}
        className="formBox-form"
        onSubmit={formik.handleSubmit}
      >
        <div className="formBox-form-btnBox">
          <Button
            ref={btnRef}
            variant="danger"
            className="formBox-form-btnBox-btn"
          >
            <BsXSquare
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
            />
          </Button>
        </div>
        <Form.Group className="formBox-form-group" controlId="formLink">
          <Form.Label>Link bài hát:</Form.Label>
          <Form.Control
            name="link"
            type="text"
            placeholder="Nhập link bài hát"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          <Form.Text>
            {formik.touched.link && formik.errors.link ? (
              <div className="errorText">{formik.errors.link}</div>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Form.Group className="formBox-form-group" controlId="formSongName">
          <Form.Label>Tên bài hát</Form.Label>
          <Form.Control
            name="songName"
            type="text"
            placeholder="Nhập tên bài hát"
            onChange={formik.handleChange}
            value={formik.values.songName}
          />
          <Form.Text>
            {formik.touched.songName && formik.errors.songName ? (
              <div className="errorText">{formik.errors.songName}</div>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Form.Group className="formBox-form-group" controlId="formSender">
          <Form.Label>Người gửi:</Form.Label>
          <Form.Control
            name="sender"
            type="text"
            placeholder="Tên người gửi"
            onChange={formik.handleChange}
            value={formik.values.sender}
          />
        </Form.Group>
        <Form.Group className="formBox-form-group" controlId="formReceiver">
          <Form.Label>Người nhận:</Form.Label>
          <Form.Control
            name="receiver"
            type="text"
            placeholder="Tên người nhận"
            onChange={formik.handleChange}
            value={formik.values.receiver}
          />
        </Form.Group>
        <Form.Group className="formBox-form-group" controlId="formMessage">
          <Form.Label>Lời nhắn</Form.Label>
          <Form.Control
            name="message"
            type="text"
            placeholder="Lời nhắn"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Form.Text>
            {formik.touched.message && formik.errors.message ? (
              <div className="errorText">{formik.errors.message}</div>
            ) : null}
          </Form.Text>
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
          //onClick={(values) => setFormState(values)}
        >
          Gửi
        </Button>
      </Form>
    </div>
  );
};

export default OrderForm;
