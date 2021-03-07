import Head from 'next/head'
import { render } from 'react-dom'

const profile = () => ({
    render() {
        return (
            <div>
                <form>
                    <div className="container my-5">
                        <div className="row my-3">
                            <label for="companyName" className="col-sm-2 col-form-label">Company Name</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="companyName" placeholder="" />
                            </div>
                        </div>
                        <div className="row my-1 my-sm-3 ">
                            <label for="address" className="col-sm-2 col-form-label">Company Address</label>
                            <div className="col-sm-6 my-1">
                                <input type="text" className="form-control" id="inputPassword3" placeholder="Address line 1" />
                            </div>
                        </div>
                        <div className="row my-1 my-sm-3">
                            <div className="col-sm-6 offset-sm-2">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Address line 2" />
                            </div>
                        </div>
                        <div class="row mb-1">
                            <div className="col-sm-2 offset-sm-2 my-0 my-sm-1">
                                <input type="text" class="form-control" placeholder="City" aria-label="City" />
                            </div>
                            <div class="col-sm-2 my-1">
                                <input type="text" class="form-control" placeholder="State" aria-label="State" />
                            </div>
                            <div class="col-sm-2 my-1">
                                <input type="text" class="form-control" placeholder="Zip" aria-label="Zip" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <label for="email" className="col-sm-2 col-form-label">Work Email</label>
                            <div className="col-sm-6">
                                <input type="email" className="form-control" id="companyName" placeholder="abc@gmail.com" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div >
        )
    }
});

export default profile