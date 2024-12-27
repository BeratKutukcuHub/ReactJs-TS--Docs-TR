import { useState } from "react";

interface FormDatas {
    file : File | null
}
let FormDatas : FormDatas = {
    file: null
}
export const FormDataInputs = () => {
    const [data, setData] = useState(FormDatas);
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
          setData({file : event.target.files?.[0]});
          const reader = new FileReader();
          reader.onload = () => {
             setFilePreview(reader.result as string);
             console.log(typeof(reader.result));
          }
          reader.readAsDataURL(event.target.files?.[0]);
        }
      };
      
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (data.file) {
        }
      };
    return (
        <div className="container">
            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-3"></div>
                
                    <div className="col-md-6">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div>
                                <input className="form-range" name="file" type="file" placeholder="Dosya Seç..." onChange={(event)=> handleChange(event)}/>
                            </div>
                            <div className="btn-gorup align-items-center text-center"><button className="btn btn-success" type="submit">Gönder</button></div>
                        </form>
                    </div>
                <div className="col-md-3"></div>
            </div>
            <img src={filePreview?filePreview: ""} alt="" />
        </div>
    )
}