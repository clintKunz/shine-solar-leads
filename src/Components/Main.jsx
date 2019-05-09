import React from 'react';
import data from '../data';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leads: []
        }
    }

    componentWillMount() {
        this.setState({
            leads: data
        })
    }


    render() {
        return(
            <section className="main">
                <table>
                    <tr id="tr-header">
                        <th><div className="rectangle"></div></th>
                        <th><div>Lead ID <i class="fas fa-sort"></i></div></th>
                        <th><div id="full-name">Full Name <i class="fas fa-angle-down"></i></div></th>
                        <th><div>Agent <i class="fas fa-sort"></i></div></th>
                        <th><div>Lead Source <i class="fas fa-sort"></i></div></th>
                        <th><div>Status <i class="fas fa-sort"></i></div></th>
                        <th><div>Age <i class="fas fa-sort"></i></div></th>
                        <th><div>Created <i class="fas fa-sort"></i></div></th>
                    </tr>
                    {this.state.leads.map(lead => (
                        <tr id="tr-leads">
                            <td><div className="rectangle"></div></td>
                            <td>{lead.id}</td>
                            <td style={{color: '#2485e1'}}>{lead.name}</td>
                            <td style={{color: '#2485e1'}}>{lead.agent}</td>
                            <td>{lead.lead_source}</td>
                            <td>{lead.status}</td>
                            <td>{lead.age}</td>
                            <td style={{color: '#7d8d9a'}}>{lead.created}</td>
                        </tr>
                    ))}
                </table>
            </section>
        )
    }
}

export default Main;