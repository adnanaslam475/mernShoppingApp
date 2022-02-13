import React, { useState } from 'react'

const Content = () => {
    const [txt, setTxt] = useState(null);
    const getcontent = async () => {
        const input = document.getElementById('input');
        const btn = document.getElementById('submit');
        const textarea = document.getElementById('textarea');
        try {
            const res = await fetch('https://obsystem.online/api/img_json.php',
                { method: 'GET', mode: "cors" });
            const data = await res.json();
            textarea.value = data.map(v => v?.content).join("\n");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div class='container'>
            <div class='row'>
                <div class='col-lg-6'>
                    <h2>Search Image</h2>
                    <br />
                </div>
            </div>
            <div class='row'>
                <div class='col-lg-3'>
                    Value :
                    <input type='text' id='input' class='form-control' />
                    <br />
                    Image type:
                    <select>
                        <option>Vector</option>
                        <option>Illustration</option>
                        <option>Icon</option>
                    </select>
                    <br />
                    Show Image:
                    <label>
                        <input type='radio' name='img' /> Yes
                    </label>
                    <label>
                        <input type='radio' name='img' /> No
                    </label>
                    <p>
                        <button type='button' id='submit' class='btn btn-primary' onClick={getcontent}>Searchs</button>
                    </p>
                </div>
                <div class='col-lg-9'>
                    <textarea class='form-control' id="textarea" rows='20'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Content