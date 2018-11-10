package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/gorilla/websocket"
)

var host *string
var port *int

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}
var clients []*websocket.Conn

func listClients() {
	fmt.Println("Connected clients:")
	for i, client := range clients {
		fmt.Printf("%d — %s\n", i, client.RemoteAddr().String())
	}
}

func socketHandler(w http.ResponseWriter, r *http.Request) {
	// Upgrade from HTTP to Websocket connection
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		panic(err)
	}

	// Add client to list of connected clients
	clients = append(clients, conn)

	// Announce connection and list current connections
	fmt.Printf("A new client has joined (%s)\n", conn.RemoteAddr().String())
	listClients()
}

func setFlags() {
	host = flag.String("host", "", "The hostname to run the server on")
	port = flag.Int("port", 4000, "The port to run the server on")
}

func main() {
	// Load flags
	setFlags()
	flag.Parse()

	// Register the server
	server := chi.NewRouter()
	server.Get("/", socketHandler)

	// Start the server
	fmt.Printf("Nine Tracks server is now listening on %s:%d...\n", *host, *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("%s:%d", *host, *port), server))
}
