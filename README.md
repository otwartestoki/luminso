# Luminso

Projekt strony Luminso oparty o Next.js, Supabase i Resend.

## Uruchomienie lokalne

1. Zainstaluj zależności:

```bash
npm install
```

2. Skopiuj plik zmiennych środowiskowych:

```bash
copy .env.example .env.local
```

Na macOS/Linux:

```bash
cp .env.example .env.local
```

3. Uzupełnij `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
RESEND_API_KEY=...
```

4. Uruchom lokalnie:

```bash
npm run dev
```

5. Sprawdź projekt przed publikacją:

```bash
npm run lint
npm run build
```

## Struktura folderów

```text
src/app/                  strony aplikacji i endpoint formularza
src/app/api/contact/      wysyłka formularza przez Resend
src/app/blog/             lista wpisów i szczegóły wpisu z Supabase
src/app/news/             widok newsów z Supabase
src/components/blocks/    aktywny navbar
src/components/ui/        komponenty UI używane przez stronę
src/lib/                  Supabase, locale i funkcje pomocnicze
src/styles/               style globalne
public/                   grafiki, logo, favicony, realizacje
fonts/                    lokalne fonty DM Sans
```

## Supabase — tabela `posts`

Strona oczekuje tabeli `posts` z polami używanymi w kodzie:

```text
id, title, excerpt, content, image_url, published, created_at, site_slug, slug, language
```

Wpisy są filtrowane po:

```text
published = true
site_slug = luminso
language = pl albo en
```

Dzięki temu wersja PL i EN mogą mieć osobne wpisy w tej samej tabeli.

## Co zostało wyczyszczone

- usunięto `node_modules`, `.next`, `.git` i `.env.local` z paczki wynikowej,
- usunięto pliki tymczasowe `PATCH.txt`, instrukcje robocze i duplikaty obrazów `*.jpg.jpg`,
- usunięto nieużywane komponenty bloga oraz stary navbar,
- poprawiono lint script,
- dodano `.env.example`,
- dodano podstawowe nagłówki bezpieczeństwa w `next.config.ts`,
- poprawiono endpoint formularza kontaktowego: walidacja danych, brak inicjalizacji Resend bez API key, escapowanie HTML,
- ujednolicono filtrowanie wpisów z Supabase po `site_slug` i `language`.
```
