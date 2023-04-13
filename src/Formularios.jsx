import React, { useState } from 'react'

const FormNewUser = () => {


    return (
        <div>
            <form>
                <label>Enter your name:
                    <input
                        type="text"
                        value={valor}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form>
        </div>

    )
}

export default FormNewUser


