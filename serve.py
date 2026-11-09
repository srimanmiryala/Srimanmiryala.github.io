#!/usr/bin/env python3
"""
Lightweight development web server for Sriman Miryala's Developer Portfolio.
Run:
    python3 serve.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean logging
        print(f"[{self.log_date_time_string()}] {args[0]} - {args[1]}")

def run_server():
    os.chdir(DIRECTORY)
    port = PORT
    for p in range(PORT, PORT + 20):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                url = f"http://localhost:{p}"
                print("=" * 60)
                print("✨ Sriman Miryala's Premium Developer Portfolio is LIVE!")
                print(f"🌐 Serving at: {url}")
                print(f"📂 Root directory: {DIRECTORY}")
                print("Press Ctrl+C to stop the server.")
                print("=" * 60)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            continue

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nServer terminated gracefully.")
        sys.exit(0)
