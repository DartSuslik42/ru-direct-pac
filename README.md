# ru-direct-pac

Лёгкий PAC-файл для **FoxyProxy** и других браузерных клиентов с поддержкой PAC URL. Он разделяет браузерный трафик по доменам российского сегмента: RU-домены идут напрямую, остальной трафик — через локальный SOCKS5-прокси.

## Маршрутизация

```text
RU domains (ru-direct)  → DIRECT
localhost / private LAN → DIRECT
остальной трафик        → SOCKS5 127.0.0.1:1080
```

Источник доменов — [kyoresuas/ru-direct](https://github.com/kyoresuas/ru-direct), по умолчанию используется asset `ru-lite.domains.txt` из latest release.

PAC намеренно лёгкий: без `dnsResolve()` и `isInNet()`; проверяется только hostname по заранее подготовленному набору доменов.

## PAC URL

```text
https://raw.githubusercontent.com/DartSuslik42/ru-direct-pac/main/proxy.pac
```

## Автообновление

GitHub Actions workflow:

- проверяет latest release `kyoresuas/ru-direct`;
- скачивает свежий `ru-lite.domains.txt`;
- пересобирает `proxy.pac`;
- коммитит изменения только при изменении upstream;
- запускается по расписанию, вручную и через внешний `repository_dispatch` event `ru-direct-release`.

GitHub не позволяет нашему репозиторию напрямую подписаться на событие `release` чужого репозитория без webhook/dispatch со стороны upstream, поэтому периодическая проверка latest release используется как fallback.

## Локальная генерация

```bash
python build_pac.py
```

Для более широкого набора можно переключиться с `ru-lite.domains.txt` на `ru-standard.domains.txt`.
