# Audyt i porządkowanie projektu Luminso

## Najważniejsze znalezione problemy

1. Paczka zawierała katalogi, których nie powinno się przenosić ani wysyłać:
   - `node_modules` — zależności instalowane lokalnie przez `npm install`,
   - `.next` — wynik lokalnego buildu,
   - `.git` — historia repozytorium,
   - `.env.local` — lokalne sekrety i konfiguracja.

2. W projekcie były pliki robocze i patch-notatki:
   - `PATCH.txt`,
   - `INSTRUKCJA_ZMIAN.txt`,
   - stare instrukcje po zmianach językowych.

3. W `public` były duplikaty obrazów, np. `*.jpg.jpg`, oraz sporo zasobów z pierwotnego szablonu, które nie były używane przez aktualną stronę.

4. Skrypt `lint` używał `next lint --fix`, co w nowszych wersjach Next.js jest problematyczne. Zmieniono na `eslint . --fix`.

5. Endpoint formularza kontaktowego tworzył klienta Resend od razu przy imporcie pliku i nie walidował danych wejściowych. Poprawiono walidację oraz escapowanie HTML.

6. Wpisy z Supabase były filtrowane tylko po języku. Dodano spójne filtrowanie po `site_slug = luminso`, `published = true` i `language = pl/en`.

## Co zostało wykonane

- Usunięto zbędne katalogi i pliki wynikowe.
- Dodano `.env.example`.
- Dodano podstawowe nagłówki bezpieczeństwa w `next.config.ts`.
- Poprawiono formularz kontaktowy.
- Uporządkowano blog/news pod osobne wersje językowe.
- Usunięto nieużywany stary navbar i nieużywane komponenty bloga.
- Usunięto nieużywane zasoby graficzne z szablonu.
- Sprawdzono TypeScript: `npx tsc --noEmit` — OK.
- Sprawdzono lint: `npm run lint` — OK po poprawkach.

## Uwaga o buildzie w tym środowisku

Nie wykonałem pełnego `npm run build` w sandboxie, ponieważ paczka zawierała zależności zainstalowane pod Windows (`@next/swc-win32-x64-msvc`), a środowisko testowe działa na Linuxie i Next próbował pobrać paczkę SWC dla Linuxa. Po uruchomieniu na Twoim komputerze przez `npm install` zależności powinny zostać dobrane poprawnie dla Windows.
