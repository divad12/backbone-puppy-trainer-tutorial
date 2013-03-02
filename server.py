#!/usr/bin/env python

import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    context = {
        'user': {
            'name': 'Santa claus',
            'fraud_score': 0.987,
            'status': None
        }
    }

    return flask.render_template('index.html', **context)

@app.route('/trainer', methods=['POST'])
def trainer():
    # TODO: save data
    print flask.request.data

    return flask.jsonify({
        'name': 'Tooth fairy'
    })

if __name__ == '__main__':
    app.debug = True
    app.run()
