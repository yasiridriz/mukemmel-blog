import React, { useState } from 'react';
import axioswal from 'axioswal';
import { Router } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import { motion } from 'framer-motion';


const titleVariants = {
    initial: { scale: 1.07, y: 0, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: .7, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", delay: 0.2 } },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};
const contentVariants = {
    initial: { scale: 1, y: 60, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: 0.5 } },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: { duration: 0.25, ease: [0.48, 0.15, 0.25, 0.96] }
    },
}


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axioswal.post('http://api-yasiridriz.herokuapp.com/api/add', {
            title: title,
            content: content,
            subtitle: subtitle
        }).then((data) => {
            if (data.status === 'ok') {
                Router.push('/');
            }
        }).catch((err) => {
            console.log("Api call unsucessfull", err);
        })
    };
    const uploadFile = (event) => {

    }

    return (

        <motion.div initial="initial" animate="enter" exit="exit" variants={titleVariants} className="box">

            <motion.h3 initial="initial" animate="enter" exit="exit" variants={titleVariants} className="title">
                <span>Write a new blog post:</span>
            </motion.h3>
            <motion.div initial="initial" animate="enter" exit="exit" variants={contentVariants} className="form-box">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="group">
                                <input className="input-default" type="text" value={title}
                                    onChange={e => setTitle(e.target.value)} required />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="group">
                                <input className="input-default" type="text" value={subtitle}
                                    onChange={e => setSubtitle(e.target.value)} required />
                                <label htmlFor="title">Subtitle</label>
                            </div>
                            <div className="group" style={{ "background": "#f1f1f1" }}>
                                <input type="file" className="browse-btn" onChange={uploadFile} accept=".epub, application/pdf" name="file" />
                                <div className="browse-btn">
                                    Upload banner
                                    </div>
                                <span className="file-info">...</span>
                            </div>
                            <br />
                            <div className="">
                                <Editor
                                    apiKey="7tco5d3idohdbxvmngt5609efdencizdttpom2u3psj2bil1"
                                    initialValue=""
                                    value={content}
                                    onEditorChange={e => setContent(e.target.value)}
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | removeformat | image',
                                        font_formats: 'PT Serif=PT Serif,serif; Courier New=courier new,courier,monospace;'
                                    }}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <button type="submit" className="btn-main">Save</button>
                    </div>
                </form>
            </motion.div>
            <script type="text/javascript" src="/static/scripts/filebrowser.js"></script>
        </motion.div>

    );
};


export default CreatePost;

