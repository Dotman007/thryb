import React,{useState} from 'react'
import Compressor from "compressorjs";
import FalseAnswerInput from './FalseAnswerInput';


const AddNewGameTwo = ({setGamesPage, answers, setAnswers,questionImage, setQuestionImage, falseAnswers, setFalseAnswers,mainAnswer,setMainAnswer,question,setQuestion}) => {

  const [compressedFile, setCompressedFile]= useState('');

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.6, 
      success: (compressedResult) => {
        setCompressedFile(compressedResult);
        handleConversion();
        return compressedResult;
      },
    });
  };
  const handleConversion = () => {
    var file = compressedFile;
    var reader = new FileReader();
    reader.onloadend = function () {
      setQuestionImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={() => {
                      setGamesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2 '>
                    <span>2</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Create Questions</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='custom-card'>
                  <form className='add-user-form'>
                  <h6 className='mb-3 f-weight-600 mt-4'>
                        Upload Question Image
                      </h6>
                    <div className='form-group mb-4 group-banner store'>
                      <input
                        type='file'
                        name=''
                        id=''
                        accept='image/*'
                        className='room-image-input'
                        onChange={(e)=>{
                          setQuestionImage(e.target.files[0]);
                          handleCompressedUpload(e);
                        }
                      }
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Question</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Who is the president of Nigeria?'
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Main Answer</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='main answer'
                        value={mainAnswer}
                        onChange={(e)=>setMainAnswer(e.target.value)}
                      />
                    </div>
                    {answers.map((item, index)=>(
                      <FalseAnswerInput key={index} index={index} falseAnswers={falseAnswers}
                      setFalseAnswers={setFalseAnswers}/>
                    ))}
                    
                    <div className='px-3 mb-4' onClick={(e) => {
                      e.preventDefault();
                      setAnswers([
                      ...answers,
                      setAnswers.length + 1,
                    ]);
                  }}>
                      <button className='btn btn-add-more'>
                        Add More False Answers
                      </button>
                    </div>
                    <div className='px-3'>
                      <div className='form-row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <button className='btn btn-continue font-sm'>
                              Add more Questions
                            </button>
                          </div>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <div
                            className='form-group'
                            onClick={(e) => {
                              e.preventDefault();
                              setGamesPage("addnew-3");
                            }}
                          >
                            <input
                              type='submit'
                              className='btn btn-continue'
                              value='Continue'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
  )
}

export default AddNewGameTwo