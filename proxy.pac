// Bootstrap PAC. The sync workflow replaces this with the generated domain list.
function FindProxyForURL(url, host) {
    host = (host || "").toLowerCase();

    if (
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "::1" ||
        host === "10.0.0.1"
    ) {
        return "DIRECT";
    }

    return "SOCKS5 127.0.0.1:1080";
}
